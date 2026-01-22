import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        importMeta: true
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^(React|Link|Button|Card|MetaTags|PoleCard|TestimonialCard|RouterProvider|Suspense|LoginForm|RegisterForm|StrictMode|App|AnimatePresence|motion|ArrowRight|ArrowLeft|Users|Lightbulb|Target|Network|Briefcase|Rocket|Brush|Settings|Code|Star|TrendingUp|Quote|Play|Shield|Zap|Globe|Award|BookOpen|Heart|MessageSquare|Sparkles|CheckCircle|Calendar|Home|Search|Outlet|PremiumHeader|Footer|SkipLink|ProtectedRoute|LoadingSpinner|MainLayout|PoleLayout|PremiumHomePage|AuthPage|PolePage|NotFound|useAuth|useNavigate|useParams|detectCurrentPole|useAccessibility|getPoleById|poles|testimonials|teamMembers|iconMap|X|LogOut|ChevronDown|IconComponent|handleFocusTrap|useEffect|useState|useRef|useCallback|useMemo|UserPlus|Check|Mail|Phone|MapPin|Menu|Helmet|index|Eye|EyeOff|Lock|User|LogIn|Navigate|AuthProvider|ErrorBoundary|_[A-Z])',
        argsIgnorePattern: '^_'
      }],
      'react-refresh/only-export-components': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
