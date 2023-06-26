# Nextjs Data Fetching

- 리액트에서는 데이터를 가져올 때 useEffect안에서 가져오지만 Nextjs에서는 다른 방식을 사용
- getStaticProps: Static Generation으로 빌드(build)할 때 데이터를 불러옴 (미리 만들어줌)

  - getStaticProps 함수를 async로 export하면, 리턴되는 props를 가지고 페이지를 pre-render함
  - build time에 페이지를 렌더링

  ```javascript
  function Blog({post}){
    return (
      ....
    )
  }

  export async function getStaticProps() {
    const res = await fetch('https://.../posts')
    const posts = await res.json();

    return {
      props: {
        posts
      }
    }
  }
  ```

- getStaticPaths: Static Generation으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현 (ex)pages/post/[id].js)

  - 동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고 HTML로 build 시간에 렌더
  - Nextjs는 pre-render에서 정적으로 getStaticPaths에서 호출하는 경로들을 가져옴

  ```javascript
  export async function getStaticPaths() {
    const res = await fetch("https://.../posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({ params: { id: post.id } }));

    return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://.../posts/${params.id}`);
    const post = await res.json();

    return { props: { post } };
  }
  ```

- getServerSideProps: Server Side Rendering으로 요청이 있을 때 데이터를 불러옴
