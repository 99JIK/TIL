---
title: "STLAB. Site 배포 계획 및 유지 보수 계획"
---

## Site 개발 및 배포

Software Testing Lab의 소개 및 Contact 사이트의 리모델링, Migration을 맡게 되었다.

개발한 내용과 앞으로의 유지보수를 위해서 문서를 작성하게 되었다.

 가벼운 용도와 적응력, 유지보수성을 고려하여 이 사이트와 똑같이 Docusaurus, 개발 용이성을 위해 Javascript Base로 개발했다.

## 설정 단계 요약

1.  **Docusaurus Site 빌드:** PC에서 Site를 빌드한다.
2.  **빌드 파일을 NAS에 업로드:** 빌드된 결과물(`build` Directory 내용)을 NAS의 특정 Directory에 업로드한다.
3.  **Synology Web Station 설정:** Web Station 패키지를 설치하고 가상 호스트를 설정하여 Docusaurus 사이트를 서비스한다.
4.  외부 접속 설정:
    -   DDNS 또는 고정 IP 설정
    -   공유기 포트 포워딩 설정
    -   (선택 사항) 방화벽 설정
5.  **HTTPS 설정 (SSL 인증서 적용):** 보안 접속을 위해 Let's Encrypt 인증서를 발급받아 적용한다.

## 상세 설정 방법

### Docusaurus 사이트 빌드

-   PC의 Docusaurus Project Directory에서 다음 Command를 실행하여 Site를 빌드한다:

    ```bash
    npm run build
    
    yarn build
    ```
    
-   빌드가 완료되면 Project 루트에 `build` Directory가 생성된다.

-   이 Directory 안의 모든 File과 하위 Directory들이 실제 Site를 구성하는 File들이다.

### 빌드 파일 NAS에 업로드

-   Synology NAS의 `File Station`을 연다.
-   기본적으로 Web Station은 `/web`을 Shared Directory를 사용한다.
    이 Directory 안에 Site File을 위한 새 Directory를 만든다(예: `/web/SITE`).
-   로컬 PC의 `build` Directory 안에 있는 **모든 내용**을 NAS의 `/web/SITE` Directory로 복사한다.

### Synology Web Station 설정

-   **Web Station 설치:** NAS의 `패키지 센터`에서 `Web Station`을 검색하여 설치한다(이미 설치되어 있다면 다음 단계로).

-   웹 서버 및 PHP 설정 (기본값 사용 가능):

    -   `Web Station`을 열고 `웹 서비스 포털` (또는 이전 버전에서는 `일반 설정`)에서 기본 HTTP Back-end Server(Apache 또는 Nginx)와 PHP Profile을 선택가능하다.
    -   Docusaurus는 Static Site이므로 PHP는 사용하지 않지만, 기본 설정으로 두어도 무방하다.

-   가상 호스트 설정:

     특정 Domain 또는 Subdomain으로 사이트를 운영하려면 가상 호스트를 설정하는 것이 좋다.

    1.  `Web Station` > `웹 서비스 포털`로 이동
    2.  `생성` > `웹 서비스 포털 생성`을 선택
    3.  `서비스`: `가상 호스트`를 선택
    4.  `포털 유형`: `이름 기반`을 선택
    5.  `호스트 이름`: 외부에서 접속할 Domain 이름을 입력(예: `docs.mydomain.com` 또는 DDNS 주소 `myname.synology.me`)
    6.  `포트`: HTTP용 `80`, HTTPS용 `443`을 선택(보통 둘 다 선택)
    7.  `문서 루트`: `찾아보기`를 클릭하여 2단계에서 Docusaurus 파일을 업로드한 Directory(예: `/web/SITE`)를 선택
    8.  `HTTP 백엔드 서버`: 원하는 웹 서버(예: Apache HTTP Server 2.4)를 선택
    9.  `PHP`: `사용 안 함` 또는 기본 프로파일을 선택(Docusaurus는 PHP를 사용하지 않음)
    10.  `액세스 제어 프로필`, `오류 프로필` 등은 필요에 따라 설정
    11.  `생성`을 클릭

### 외부 접속 설정

-   **A. DDNS 또는 고정 IP 주소:**

    -   DDNS (Dynamic DNS):

         대부분의 가정용 인터넷은 유동 IP를 사용하므로 DDNS 설정이 필요하다.

        -   NAS의 `제어판` > `외부 액세스` > `DDNS`로 이동한다.
        -   `추가`를 클릭하고 Synology에서 제공하는 DDNS 서비스(예: `myname.synology.me`)를 설정하거나, 다른 DDNS 제공업체를 선택한다.

    -   **고정 IP:** ISP로부터 고정 공인 IP를 할당받았다면 이 IP를 사용한다.

    -   개인 Domain 사용 시:

        -   개인 Domain(예: `mydomain.com`)이 있다면, Domain 등록기관(예: 가비아, Namecheap 등)의 DNS 설정에서 Subdomain(예: `docs.mydomain.com`)에 대해 `CNAME` 레코드로 DDNS 주소(`myname.synology.me`)를 가리키거나, `A 레코드`로 공인 고정 IP 주소를 가리키도록 설정한다.

-   **B. 공유기 포트 포워딩:**

    -   인터넷 공유기 관리 페이지에 접속한다(보통 `192.168.0.1` 또는 `192.168.1.1`).
    -   `포트 포워딩` 또는 `가상 서버` 메뉴를 찾는다.
    -   다음과 같이 포트 포워딩 규칙을 추가한다:
        -   **규칙 1 (HTTP):** 외부 포트 `80` -> 내부 IP 주소 (NAS의 내부 IP) -> 내부 포트 `80`
        -   **규칙 2 (HTTPS):** 외부 포트 `443` -> 내부 IP 주소 (NAS의 내부 IP) -> 내부 포트 `443`
    -   NAS는 내부 네트워크에서 고정 IP 주소를 사용하도록 설정하는 것이 좋습니다.

-   **C. 방화벽 설정 (선택 사항):**

    -   **공유기 방화벽:** 외부에서 TCP 포트 80과 443으로의 접속을 허용하도록 설정되어 있는지 확인합니다.
    -   **NAS 방화벽:** NAS의 `제어판` > `보안` > `방화벽`에서 방화벽이 활성화되어 있다면, 외부에서 NAS의 웹 서버 포트(80, 443)로의 접속을 허용하는 규칙을 추가해야 합니다. (예: 출발지 IP '모두', 포트 80, 443 허용)

### HTTPS 설정 (SSL 인증서 적용 - 강력 권장)

-   보안 접속(HTTPS)을 위해 SSL 인증서를 설치합니다. Synology NAS는 Let's Encrypt 무료 인증서를 쉽게 발급받아 사용할 수 있도록 지원한다.

    1.  NAS의 `제어판` > `보안` > `인증서`로 이동

    2.  `추가` 버튼을 클릭

    3.  `새 인증서 추가`를 선택하고 `다음`을 클릭

    4.  `Let's Encrypt에서 인증서 얻기`를 선택하고 `기본 인증서로 설정`에 체크한 후 `다음`을 클릭

    5.  `Domain 이름`: 4-A 단계에서 설정한 DDNS 주소 또는 개인 Domain/Subdomain(예: `docs.mydomain.com`)을 입력

    6.  `이메일`: 인증서 관련 알림을 받을 이메일 주소를 입력

    7.  `주체 대체 이름`: 동일한 인증서로 여러 Domain을 사용하려면 여기에 추가(보통 비워둠)

    8.  `적용` 또는 `완료`를 클릭하여 인증서 발급 진행
    -   **중요:** Let's Encrypt 인증서 발급 시 Domain 소유권 확인을 위해 외부에서 NAS의 80번 포트로 접속이 가능해야 함(4-B 단계의 포트 포워딩이 정상적으로 설정되어 있어야 함)
        
9.  인증서가 성공적으로 발급되면, `구성` 버튼을 눌러 각 서비스(특히 위에서 생성한 가상 호스트)에 새로 발급받은 인증서를 할당, Web Station의 가상 호스트 설정에서도 HTTPS 포트를 활성화하고 해당 인증서를 지정해야 함

### 접속 테스트

-   **내부망 테스트:** 웹 브라우저에서 `http://<NAS_INNER_IP_ADDRESS>/SITE` (가상호스트 미사용시) 또는 `http://<설정한 HOST_NAME>` (가상 호스트 사용 시, PC의 hosts 파일 수정 필요 가능성) 으로 접속한다.
-   **외부망 테스트:** 스마트폰의 모바일 데이터(Wi-Fi 끄고)를 이용하거나 다른 네트워크 환경에서 설정한 외부 접속 주소(예: `https://docs.mydomain.com` 또는 `https://myname.synology.me`)로 접속하여 사이트가 잘 보이는지, HTTPS 연결(자물쇠 아이콘)이 정상적인지 확인한다.

### 문제 해결 팁

-   **DNS 전파:** Domain 관련 DNS 설정을 변경한 경우, 전 세계 DNS 서버로 전파되는 데 시간이 걸릴 수 있다(몇 분에서 최대 48시간).
-   **캐시:** 브라우저 캐시나 DNS 캐시 문제일 수 있으므로, 캐시를 삭제하거나 다른 브라우저/시크릿 모드로 테스트해야 한다.
-   **Docusaurus `baseUrl`:** 만약 가상 호스트의 루트가 아닌 하위 경로로 서비스한다면(예: `mydomain.com/docs/`), Docusaurus Project의 `docusaurus.config.js` 파일에서 `baseUrl` 설정을 해당 경로(예: `/docs/`)로 맞춰주고 다시 빌드해야 할 수 있다. 하지만 일반적으로 가상 호스트를 사용하면 Domain 자체가 사이트의 루트가 되므로 `baseUrl: '/'` 로 두면 된다.
-   **Synology 로그 확인:** Web Station 로그, DSM 시스템 로그 등을 확인하여 오류 메시지가 있는지 찾는다.

위 단계를 차근차근 진행하시면 Synology NAS로 Docusaurus 사이트를 안정적으로 외부 서비스할 수 있다. 특히 HTTPS 설정은 보안을 위해 반드시 진행하시는 것이 좋다.

### 핵심 고려 사항

1.  **빌드 환경:** Docusaurus 빌드(`npm run build`)는 Node.js 환경이 필요하며, NAS에서 직접 실행하면 성능이 다소 느릴 수 있다.
2.  **트리거:** 어떤 이벤트(예: Git push)를 기준으로 자동 빌드를 실행할지 결정한다.
3.  **배포:** 빌드된 정적 파일들을 NAS의 Web Station 문서 루트로 어떻게 옮길지 결정한다.

### 가능한 시나리오 및 설정 방법

### 외부 CI/CD 서비스 활용

이 방법은 빌드 과정을 NAS 외부의 전문 CI/CD 플랫폼(GitHub Actions)에서 처리하고, 빌드 결과물만 NAS로 배포하는 방식이다. NAS의 부하를 줄이고, 안정적이며 빠른 빌드가 가능하다.

-   작동 방식
    1.  Docusaurus 소스 코드를 GitHub 또는 GitLab과 같은 Git 호스팅 서비스에 푸시(push)한다.
    2.  푸시 이벤트를 트리거로 GitHub Actions 또는 GitLab CI 파이프라인이 실행된다.
    3.  CI 파이프라인 내에서 아래 작업이 수행된다:
        -   Node.js 환경 설정
        -   소스 코드 체크아웃
        -   의존성 설치 (`npm ci` 또는 `yarn install --frozen-lockfile`)
        -   Docusaurus 빌드 (`npm run build` 또는 `yarn build`)
        -   빌드된 `build` Directory의 내용을 Synology NAS로 배포한다.
-   NAS로 배포하는 방법 (CI 파이프라인에서):
    -   `rsync` 또는 `scp` 사용 (SSH 필요):
        -   NAS에서 SSH 서비스를 활성화한다.
        -   CI/CD 서비스에 NAS 접속을 위한 SSH 키를 안전하게 등록한다(Secrets 기능 활용).
        -   `rsync` (권장, 변경된 파일만 동기화) 또는 `scp` 명령어를 사용하여 `build` Directory 내용을 NAS의 Web Station 문서 루트 (예: `/web/SITE`)로 전송한다.
    -   **FTP/SFTP:** NAS에서 FTP/SFTP 서버를 활성화하고, CI/CD 서비스에서 FTP/SFTP 클라이언트를 사용하여 파일을 업로드한다.(SSH보다 보안성이 낮을 수 있음)
    -   **Synology API 또는 WebDAV:** 고급 사용자의 경우 Synology API를 이용하거나 WebDAV를 통해 파일을 업로드할 수도 있다.
-   장점:
    -   빌드 과정이 NAS의 리소스를 사용하지 않아 NAS 성능에 영향을 주지 않는다.
    -   표준화되고 강력한 CI/CD 기능을 활용할 수 있다.
    -   소스 코드 버전 관리와 배포 자동화가 체계적으로 이루어진다.
-   단점:
    -   외부 서비스(GitHub, GitLab 등)에 대한 의존성이 생긴다.
    -   초기 설정이 다소 복잡할 수 있다.

### GitHub Actions 예시 (`.github/workflows/deploy.yml`)

```yaml
name: Deploy Docusaurus to Synology NAS

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18' # Docusaurus가 요구하는 Node.js 버전 명시
          cache: 'npm' # 또는 'yarn'

      - name: Install dependencies
        run: npm ci # 또는 yarn install --frozen-lockfile

      - name: Build Docusaurus site
        run: npm run build # 또는 yarn build

      - name: Deploy to Synology NAS using rsync
        uses: easingthemes/ssh-deploy@v5.0.0 # 또는 다른 rsync/scp 액션 사용
        with:
          SSH_PRIVATE_KEY: ${{ secrets.NAS_SSH_PRIVATE_KEY }} # GitHub Secrets에 NAS SSH 개인키 저장
          ARGS: "-avz --delete" # rsync 옵션
          SOURCE: "build/" # 빌드 결과물 Directory
          REMOTE_HOST: ${{ secrets.NAS_HOST }} # GitHub Secrets에 NAS 호스트 주소(DDNS 또는 IP) 저장
          REMOTE_USER: ${{ secrets.NAS_USER }} # GitHub Secrets에 NAS SSH 사용자 이름 저장
          TARGET: "/volume1/web/SITE" # NAS의 Web Station 문서 루트 경로
          # EXCLUDE: "/dist/, /node_modules/" # 필요시 제외할 Directory (SOURCE가 build/ 이므로 보통 불필요)
```

### 실제 준비 Flow

#### 1. `docusaurus.comfig.js`의 `url`, `basuUrl` 확인 및 수정

-   NAS에서 사이트를 서비스할 최종 URL 경로에 맞게`url`, `baseUrl`을 설정한다.
-   예시로 `https://stlab.knu.ac.kr` 로 서비스 할 경우, `url: 'https://stlab.knu.ac.kr'`, `baseUrl: '/'`로 설정한다.
-   NAS의 Web Station에서 가상 호스트의 Root에 직접 연결하거나 기본 웹 공유 디렉터리`/web`의 Root에 배포한다면 `baseUrl: '/'`로 설정한다.

#### 2. 빌드 테스트

-   로컬에서 `npm run build` Command를 통해 build 폴더에 Static file들이 정상적으로 생성되는지 확인한다.

#### 3. Synology NAS Web Station 설치 및 설정

-   Package Center에서 Web Station을 설치한다.
-   사이트 파일을 저장할 디렉터리를 기본 웹 공유 디렉터리 아래에 생성한다.

#### 4. Synology NAS SSH 서비스 활성화

-   DSM \> 제어판 \> 터미널 및 SNMP \> 터미널의 SSH 서비스 활성화를 체크한다.
    -   보안을 위해 다른 Port Number를 사용하는 것을 권장한다.
-   가능하다면 배포 전용 사용자를 생성하여 관리하는 것이 유용하다.
    -   DSM \> 제어판 \> 사용자 및 그룹\(사용자\)의 생성을 선택하여 새 사용자를 생성한다.(예시: `github-deployer`)
    -   생성한 사용자에게 사이트 파일을 저장할 디렉터리의 읽기/쓰기 권한을 부여한다.
    -   생성한 사용자에게 SSH 서비스에 접근 권한을 허용한다.
-   가상 호스트를 생성하여 특정 Domain을 사용하여 운영할 수 있도록 설정한다.
    -   Web Station \> 가상 호스트 \> 생성의 이름 기반 또는 포트 기반 선택한다.
        -   설정 시 이름 기반으로 선택하였다.
        -   호스트 이름에는 사용할 도메인을 기입하였다.
        -   포트는 사용할 포트를 기입하였다.
        -   문서 루트는 웹 공유 디렉터리 아래에 생성한 사이트 파일을 저장한 디렉터리를 지정하였다.
        -   HTTPS 설정은 가능하다면 모두 체크해주는 것이 좋다.
        -   HTTP 백엔드 서버는 Nginx를 선택하였다.
        -   PHP는 Static Site이므로 필요없다.

#### 5. SSH Key 설정 및 Synology NAS에 Public Key 등록

-   배포 사용자의 암호 대신 SSH Key를 사용하여 인증하여 관리하여 더 안전한 관리를 목적으로 한다.
-   생성한 배포 사용자의 계정의 터미널에서 SSH Key Pair를 생성한다.
    -   `ssh-keygen -t ed25519 -C "github_actions_stlab_deploy"`
    -   생성한 Public Key의 내용을 Administrator로 로그인 하여 제어판 \> 터미널 및 SNMP \> SSH 서비스가 활성화 되어 있는지 확인한다.
    -   authorized key를 생성한다.
    -   현재 사용하는 NAS OS의 버전에 따라 사용자 계정의 SFTP, SSH를 수행하기 위한 권한이 다를 수 있으므로 이를 유의하여 계정을 설정한다.

#### 6. Github Actions Workflow 생성 - Repository Secrets

-   Github Repository Secrets를 이용하여 민감한 정보들을 관리한다.

    -   해당 Github Repository \> Settings \> Secrets and Variables \> Actions \> New Repository Secret
    -   아래 내용들을 Secret으로 관리할 예정이다.
        -   `NAS_SSH_HOST`
        -   `NAS_SSH_USER`
        -   `NAS_SSH_KEY`
        -   `NAS_DEPLOY_PATH`
        -   `NAS_SSH_PORT`
        -   이후 추가 시 기입

-   rsync로 생기는 부하는 미미하여 고려하지 않아도 될 정도이다.

    -   평균적인 나스 사용 상황

        ![Before rsync](./img/STLAB-Site-Deployment-Plan/before_rsync.png)

    -   rsync 전송 완료 이후 상황

        ![After rsync](./img/STLAB-Site-Deployment-Plan/after_rsync.png)

#### 7. Workflow YAML File 생성

-   Repository의 `./.github/workflows/deploy-nas.yml`에 아래와 같이 작성할 예정이다.

```yml
name: Deploy STLAB Site to Synology NAS

on:
	push:
		branches:
			- main
jobs:
	build-and-deploy:
		runs-on: ubuntu-latest
		steps:
			- name:	Checkout Repository
			  uses:	actions/checkout@v4
				  
			- name:	Set up Node.js
			  uses:	actions/setup-node@v4
              with:
                node-version:	'18'
                cache:			'npm'
					
            - name:	Install Dependencies
              run:	npm ci
              #env:
				  
            - name: Deploy to NAS using rsync over SSH
              uses: easingthemes/ssh-deploy@v5.0.0
              with:
                SSH_PRIVATE_KEY:	${{ secrets.NAS_SSH_KEY }}
                ARGS:				"-rlvz --delete --cvs-exclude"
                SOURCE:				"build/"
                REMOTE_HOST: 		${{ secrets.NAS_SSH_HOST }}
                REMOTE_USER: 		${{ secrets.NAS_SSH_USER }}
                TARGET:				${{ secrets.NAS_SSH_PATH }}
                REMOTE_PORT:		${{ secrets.NAS_SSH_PORT }} 
```



#### 8. 테스트 및 문제 해결

-   위 설정한 내용들을 `main` Branch에 push 후 Github Actions Tab에서 Workflow 실행 과정을 모니터링 한다.
-   오류 발생 시 Log를 확인하여 해결한다.
-   배포가 성공할 경우 NAS Web Station에 설정한 URL로 접속하여 사이트가 정상적으로 보이는 지 확인한다.

### 실제 발생 오류 및 해결상황



### 추가 요구사항

[ ] 교수님 설명 캐러셀이 교수님께 조금 부담스럽다는 평가를 받아 사진 이미지를 지우는 방향으로 변경한다.
[ ] 논문 및 특허의 제목이 가시성이 고려되지 않아 UI/UX 측면으로 좋지 못해 수정할 예정이다.
[ ] 메인 캐러셀에 중점 연구 페이지를 생성한다. 하나는 덕엽이 형과 내 연구 방향성, 나머지 하나는 승모님 방향성의 페이지로 생성할 예정이다.