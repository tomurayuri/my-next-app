import { NextPage } from "next";
type DataObj = {
  body: string;
};
const AboutSSR: NextPage = (props: any) => {
  return (
    <div>
      <h1>About us</h1>
      <p>{props.data.map((m: DataObj) => m.body)}</p>
    </div>
  );
};

// クライアントとサーバーどっちでも動く
export async function getServerSideProps() {
  const result = await fetch("http://localhost:3000/api/messages");
  return {
    props: {
      data: await result.json(),
    },
  };
}

export default AboutSSR;
