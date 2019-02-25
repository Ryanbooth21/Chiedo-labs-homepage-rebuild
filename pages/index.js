import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import '../styles/style.scss';
import Layout from '../components/Layout'
import Header from '../components/Header'
import WhatWeDo from '../components/WhatWeDo'
import FoundingMembers from '../components/FoundingMembers'
import WhoWeServe from '../components/WhoWeServe'
import CultureBlog from '../components/CultureBlog'
import Portfolio from '../components/Portfolio'
import MoreLinks from '../components/MoreLinks'


const Index = (props) => {
    
    return (
    <Layout>
        <Header media={props.media} />
        <WhatWeDo/>
        <FoundingMembers media={props.media}/>
        <WhoWeServe/>
        <CultureBlog posts={props.posts}/>
        <Portfolio media={props.media}/>
        <MoreLinks/>
    </Layout>
    )
}

Index.getInitialProps = async function()  {
    const [res, res2] = await Promise.all([
        fetch('https://beta.chiedo.com/wp-json/wp/v2/media?per_page=100'),
        fetch('https://beta.chiedo.com/wp-json/wp/v2/posts')
    ]) 

    const data = await res.json()
    const data2 = await res2.json()
    console.log(data)
    return {
        media: data,
        posts: data2
    }
}

export default Index