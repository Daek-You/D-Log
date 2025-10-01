---
tags:
  - "#CloudFlare"
  - "#Quartz4"
  - "#Giscus"
  - "#Google-Analytics"
description: Notion과 Tistory를 버리고 옵시디언 블로그를 선택한 이유
---


## 1. 요구사항

1. <b>데이터 백업본이 나한테도 있어야 함</b>
	- ❌Notion, Tistory는 회사 DB가 날아가면 내 자료도 날아감
	- ✅[Obsidian](https://obsidian.md/) + [Github](https://github.com/) 조합으로 이를 해결
2. <b>자료 공유가 쉽고 어디서든 볼 수 있어야 함</b>
	- ❌단순 `Obsidian + Github`만으로는 다른 사람과 자료를 공유, 소통이 힘듦
	- ❌다른 PC에서 내 자료를 보려면 `Git`과 `Obsidian`을 깔아야 하는 번거로움
	- ✅Github에 등록한 마크다운 파일을 웹 페이지 형태로 호스팅하자! → [Cloudflare](https://www.cloudflare.com/ko-kr/)
	- ✅[Giscus](https://giscus.app/ko)를 통해 블로그에 무료 댓글 시스템을 달자!

## 2. 기술 스택 선정

> [!check]- 웹 페이지 변환: [Quartz](https://quartz.jzhao.xyz/)
> 옵시디언 마크다운 파일을 웹페이지로 완벽하게 호환되도록 변환하는 데 최적화된 도구
> - <b>고유 문법 처리</b>
> 	- 옵시디언의 핵심 기능인 `[[wikilinks]]`, `![[embeds]]`와 같은 <b>확장 마크다운 문법</b>을 웹에서 작동하는 HTML 구조와 자바스크립트 기능으로 변환
> - <b>구조 유지</b>
> 	- 옵시디언 볼트 파일 및 폴더 구조에 따라 웹사이트 URL 구조를 자동으로 생성
> 	- 볼트 내의 <u>지식 연결 구조</u>를 웹에서도 그대로 보여줌
> 
> 옵시디언으로 작성한 글을 웹사이트 방문자가 링크를 클릭, 검색, 그리고 그래프를 통해 지식을 탐색할 수 있도록 만들어주는 <b>번역기(Translator)</b>이자 <b>빌더(Builder)</b> 역할을 수행

> [!tip]- 웹 호스팅: [Cloudflare](https://www.cloudflare.com/ko-kr/)
> [Netlify](https://www.netlify.com/)와 [Vercel](https://vercel.com/daek-yous-projects)도 고려해봤으나, 다음 내용을 통해 `Cloudflare`를 선택
> - 대역폭 제한 없음
> - 월 500회 빌드를 허용하며, 셋 중에 가장 많은 횟수를 제공
> - 정적 콘텐츠에 한해, 무료 호스팅 가능
> - 글로벌 CDN 사용으로 인해, 전 세계 어디서든 빠른 속도 보장
> 
> 마크다운 파일을 웹페이지 형태로 파싱해서 올리기 때문에 정적 콘텐츠만 제공
> 또한, 페이지에 포함된 이미지가 있더라도 대역폭에 제한이 없어 빠르게 로딩이 됨


<br>

## 3. 블로그 본격적으로 만들기 참고

- [뒤끝 개발자님 | 내 Obsidian 블로그를 Google Analytics에 등록하기](https://hel-p.tistory.com/57)
- [안피곤님 | Quartz 블로그에 댓글 기능 추가하기: Giscus 사용 방법](https://anpigon.pages.dev/%F0%9F%A7%B0-%EC%83%9D%EC%82%B0%EC%84%B1-%EB%8F%84%EA%B5%AC/%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8-Obsidian/Quartz/Quartz-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)
- [서버포럼 | [Quartz4] Cloudflare Pages를 이용해 블로그 무료 호스팅하기](https://svrforum.com/software/2531762)

