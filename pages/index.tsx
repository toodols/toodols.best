import Head from "next/head";
import type { NextPage } from "next";
import { Button } from "@mui/material";
import { MemoryRouter, Route, Router } from "react-router-dom";
import { useRouter } from "next/dist/client/router";

const Nav: React.FC<{href: string}> = (props)=>{
  const router = useRouter();
  return <Button href={props.href} onClick={(e)=>{
    e.preventDefault();
    if (e.ctrlKey){
      window.open(props.href,'_blank')
    } else {
      router.push(props.href, props.href, {shallow: true})
    }
  }} style={{fontSize: 20, padding: "0 25px"}}  variant="text">{props.children}</Button>
  
}

const Title: React.FC = ()=>{
  return <div style={{position: "absolute", left: "50%", transform:"translate(-50%, -50%)", textAlign:"center", top: "calc(50% - 50px)", flexWrap: "wrap", maxWidth: "calc(100vw - 40px)"}}>
    <div style={{ userSelect:"none", transition:"font-size .5s",  fontSize: "min(30vw, min(25vh, 150px))", maxWidth: "100vw" }}>Toodols</div>
    <div style={{fontSize: "20px"}}>Talentless Game and Web Developer</div>
    <div style={{ marginTop: 30, display: "flex", justifyContent: "space-evenly"}}>
      <Nav href="#profiles">Profiles</Nav> <Nav href="#about">About</Nav> <Nav href="#projects">Projects</Nav> <Nav href="#misc">Misc</Nav>
    </div>
</div>
}

const Home: NextPage = () => {
  const route = useRouter();

  return (
    <>
      <Head>
        <title>Toodols</title>
      </Head>
      <Title/>
      <div>{route.asPath}</div>
    </>
  );
};

export default Home;
 