### React Multi Page Web Template 1

### How to use
```
yarn install
yarn start
```
### Tutorial
* React Router: 멀티 페이지를 React에서 제공하기 위해 사용
* How to make React App
```
# node.js, yarn, Editor 설치 이후 특정 폴더 접근
yarn global add create-react-app
create-react-app react-multi-page-web-template-1
# 만들어진 React App에 접근
cd react-multi-page-web-template-1
```
* Install React Router Dom
```
yarn add react-router-dom
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/94ee6fa902f12271a12c45a8a186296eab454412
# /, /about, /faq 경로로 테스트
```
* Add Header & Header Design
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/00bb34a56d116cc28ceec955ed551b61e5a9c834
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/bcfbe19ba46b7a06e0f51e7ac1ca797406c0906f
```
* Add Q/A & Q/A Design
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/d7e9c89a54178e3122276fb3e11eed8899d6b54f
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/192a69d04926a18297ce9f49c38824dee4bb305c
```
* Add Board & Detail Routing
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/f794ffff1d5c03a171640ab27ce094ee150a0790
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/5bb62f2cdd0086234d493231ee668824e328de61
````
* Get FAQ From Firebase

![image](https://user-images.githubusercontent.com/16822641/58227791-530d6100-7d67-11e9-8649-3646825e1829.png)
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/b86d59e512fae01361a2dfa8f0e2056c7d18ebe8
```

* Get About From Firebase

![image](https://user-images.githubusercontent.com/16822641/58228027-39204e00-7d68-11e9-9ba1-10454f82e790.png)
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/96e0e447c37149fdf94609556b8d62885da4f375
```

* Add Notice

![image](https://user-images.githubusercontent.com/16822641/58541388-62445100-8236-11e9-8278-6188bffa5fde.png)
```
# https://github.com/ndb796/React-Multi-Page-Web-Template-1/commit/fd612e717ac385a17b82ef9d07da58a582fc3691
```

* Add Multi Language Support
```
yarn add react-i18next
yarn add i18next
yarn add i18next-browser-languagedetector
```

* Deploy on AWS Cloud Front
```
yarn build
# check ./build folder
# create AWS S3 Bucket
# name: www-deploy-test (Only Next)
# [Upload] all the build files
# [Properties] - [Static website hosting] - [Use this bucket to host a website] - index: index.html, error: index.html
# Open endpoint URL - 403 Forbidden Error
# 버킷 정책 변환하기
# [Block public access] - Off [Block public access to buckets and objects granted through new public bucket policies]
# [Block public access] - Off [Block public and cross-account access to buckets and objects through any public bucket policies]
# [Bucket Policy]
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::www-deploy-test/*"
            ]
        }
    ]
}
# Open endpoint URL - 200
# [Cloud Front] - [Create Distribution] - Web [Get Started] - Origin Domain Name 선택 - [Redirect HTTP to HTTPS] - Default Root Object: index.html - [Create Distribution]
# 10분 뒤 CDN 설정 완료
# [Network] 탭에서 x-cache: Hit from cloudfront 확인
# 1) Route53를 이용하는 경우 => 원하는 도메인 추가: ex) Route53에서 Name: test.xxx.com - Type: A Type - Value: 서버 IP 설정
# 2) Cloud Flare와 연동된 경우 => Cloud Flare에서 test 서브 도메인 - 서버 IP 설정 (단, 어차피 이용이 어려움.)
# 결과적으로 test.xxx.com에 들어갈 수 있는지 먼저 확인
# Cloud Front 설정 - [General] - [Edit] - Alternate Domain Names: test.xxx.com - [Request or Import a Certificate with ACM] - Domain Name: test.xxx.com - DNS validation - [Review] - [Confirm and request]
# 1) Route53를 이용하는 경우 => [Create record in Route 53] - 기존에 존재하는 도메인에 CNAME 값 추가 - [Continue] - 10분 이내로 Pending 상태에서 완료 상태로 변경 - 이후에 Route S3의 A Type 값을 Cloud Front Alias로 설정
# 2) Cloud Flare와 연동된 경우 => 이용이 어려움. 대신 Cloud Flare의 기본적은 CDN 기능 이용.
```

* Route 문제 해결
```
# Cloud Front에서 /notice 페이지에서 새로고침을 하게 되면, 403 Forbidden 오류 발생. 왜냐하면 React App은 기본적으로 / 페이지에 접속을 하여, React Router의 기능이 동작하기 때문. 따라서 /notice 페이지를 /index.html 페이지로 보내면 정상적으로 동작.
# Cloud Front를 이용할 때 React App의 Route 문제 발생 - [CloudFront Distributions] - [Edit] - [Error Pages] - [Create Custom Error Response] - HTTP Error Code: 403 Forbidden - TTL: 60 - Customize Error Response: Yes - Response Page Path: /index.html - HTTP Response Code: 200 OK
# Cloud Front를 이용하는 것이 아니라, 다른 서비스를 이용할 때에도 비슷한 방식으로 문제를 해결할 수 있음. (Express, Apache, Nginx 등에 따라서 /*를 /index.html로 보내는 방법이 조금씩 다름.)
```
