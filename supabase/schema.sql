-- ============================================
-- Fluent: 영어 학습 앱 데이터베이스 스키마
-- Supabase (PostgreSQL) 용
-- ============================================

-- UUID 확장
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===== 사용자 프로필 =====
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  current_level INT NOT NULL DEFAULT 1,
  total_xp INT NOT NULL DEFAULT 0,
  streak INT NOT NULL DEFAULT 0,
  last_study_date DATE,
  daily_expression_goal INT NOT NULL DEFAULT 3,
  daily_vocab_goal INT NOT NULL DEFAULT 5,
  review_ratio NUMERIC(3,2) NOT NULL DEFAULT 0.30,
  dark_mode BOOLEAN NOT NULL DEFAULT true,
  reminder_time TIME,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 레벨 =====
CREATE TABLE levels (
  id SERIAL PRIMARY KEY,
  level INT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  cefr TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 테마 =====
CREATE TABLE themes (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  level_id INT NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 유닛 =====
CREATE TABLE units (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  theme_id TEXT NOT NULL REFERENCES themes(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 핵심 표현 =====
CREATE TABLE expressions (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  unit_id TEXT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  english TEXT NOT NULL,
  korean TEXT NOT NULL,
  difficulty INT NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 5),
  notes TEXT,
  is_ai_generated BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 핵심 어휘 =====
CREATE TABLE vocabulary (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  unit_id TEXT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  word TEXT NOT NULL,
  meaning TEXT NOT NULL,
  part_of_speech TEXT NOT NULL,
  example_sentence TEXT,
  example_translation TEXT,
  is_ai_generated BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 학습 세션 기록 =====
CREATE TABLE session_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  unit_id TEXT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  total_activities INT NOT NULL DEFAULT 0,
  correct_count INT NOT NULL DEFAULT 0,
  xp_earned INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 활동 결과 =====
CREATE TABLE activity_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES session_logs(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  item_id TEXT NOT NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('expression', 'vocabulary')),
  is_correct BOOLEAN NOT NULL,
  user_answer TEXT,
  time_spent_ms INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 마스터리 기록 =====
CREATE TABLE mastery_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('expression', 'vocabulary')),
  weakness_score INT NOT NULL DEFAULT 0 CHECK (weakness_score BETWEEN 0 AND 5),
  correct_streak INT NOT NULL DEFAULT 0,
  total_attempts INT NOT NULL DEFAULT 0,
  correct_attempts INT NOT NULL DEFAULT 0,
  last_attempt_at TIMESTAMPTZ,
  next_review_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, item_id, item_type)
);

-- ===== 유닛 진행도 =====
CREATE TABLE unit_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  unit_id TEXT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, unit_id)
);

-- ===== 레벨 테스트 결과 =====
CREATE TABLE level_test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  assigned_level INT NOT NULL,
  score NUMERIC(5,2),
  details JSONB,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== 업적/배지 =====
CREATE TABLE badges (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  condition_type TEXT NOT NULL,
  condition_value INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_badges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- ===== 인덱스 =====
CREATE INDEX idx_themes_level_id ON themes(level_id);
CREATE INDEX idx_units_theme_id ON units(theme_id);
CREATE INDEX idx_expressions_unit_id ON expressions(unit_id);
CREATE INDEX idx_vocabulary_unit_id ON vocabulary(unit_id);
CREATE INDEX idx_session_logs_user_id ON session_logs(user_id);
CREATE INDEX idx_session_logs_started_at ON session_logs(started_at);
CREATE INDEX idx_activity_results_session_id ON activity_results(session_id);
CREATE INDEX idx_mastery_records_user_item ON mastery_records(user_id, item_id, item_type);
CREATE INDEX idx_mastery_records_weakness ON mastery_records(user_id, weakness_score DESC);
CREATE INDEX idx_unit_progress_user_id ON unit_progress(user_id);

-- ===== RLS 정책 =====
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE mastery_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE unit_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE level_test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

-- 사용자 자신의 데이터만 접근 가능
CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own sessions" ON session_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own sessions" ON session_logs FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own results" ON activity_results FOR SELECT USING (
  session_id IN (SELECT id FROM session_logs WHERE user_id = auth.uid())
);
CREATE POLICY "Users can insert own results" ON activity_results FOR INSERT WITH CHECK (
  session_id IN (SELECT id FROM session_logs WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage own mastery" ON mastery_records FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own progress" ON unit_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own test results" ON level_test_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own badges" ON user_badges FOR ALL USING (auth.uid() = user_id);

-- 커리큘럼 데이터는 모든 인증된 사용자가 읽기 가능
ALTER TABLE levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE expressions ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read levels" ON levels FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read themes" ON themes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read units" ON units FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read expressions" ON expressions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read vocabulary" ON vocabulary FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read badges" ON badges FOR SELECT TO authenticated USING (true);

-- ===== 함수: updated_at 자동 갱신 =====
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_expressions_updated_at BEFORE UPDATE ON expressions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vocabulary_updated_at BEFORE UPDATE ON vocabulary FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_mastery_records_updated_at BEFORE UPDATE ON mastery_records FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_unit_progress_updated_at BEFORE UPDATE ON unit_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
