# fe-test-repo

## 

<img width="867" height="515" alt="image" src="https://github.com/user-attachments/assets/0a85a330-38b8-4e8b-8d71-cac368fef415" />

### 체크박스 & 버튼 상호작용 테스트

#### 📌 개요
이 프로젝트는 React 컴포넌트에서 체크박스와 버튼 간의 상호작용을 테스트하는 예제입니다. 사용자가 약관 동의 체크박스를 클릭할 때마다 버튼의 활성화 상태가 올바르게 변경되는지 검증합니다.

#### 🧪 테스트 케이스

#### 1. 초기 상태
- [x] 체크박스는 기본적으로 체크되어 있지 않음
- [x] 확인 버튼은 비활성화 상태로 시작

#### 2. 상호작용 테스트
- [x] 체크박스 클릭 시:
  - 체크박스가 체크됨
  - 확인 버튼이 활성화됨
- [x] 체크박스 다시 클릭 시:
  - 체크박스가 체크 해제됨
  - 확인 버튼이 다시 비활성화됨

#### 🛠 기술 스택
- React
- Testing Library
- Vitest
- @testing-library/jest-dom

#### 🚀 실행 방법
```bash
# 테스트 실행
npm run test

# 로컬 서버 실행
npm run dev
