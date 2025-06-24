## ⚠️ 회원가입 요청이 막히는 이유 (CORS 관련)

본 프로젝트의 회원가입 기능은 다음과 같은 외부 API 서버(`https://front-mission.bigs.or.kr/auth/signup`)에 요청을 보냅니다.  
하지만 해당 서버는 CORS 설정이 되어 있지 않아, 브라우저(프론트엔드) 환경에서는 **요청이 차단됩니다.**

즉, React 등 클라이언트에서 직접 요청하면 **Network Error**가 발생합니다.

### ✅ 해결 방법 (테스트용)
- Postman 등의 툴로 테스트 가능 (CORS 무관)
- 또는 개발 중에는 프록시 서버를 설정해 우회 가능 (ex: Vite, Webpack devServer 사용)

> 해당 API 서버가 CORS를 허용해야 프론트에서 직접 요청이 가능합니다.