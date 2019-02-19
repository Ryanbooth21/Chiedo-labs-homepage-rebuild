import '../styles/style.scss';
import Layout from '../components/Layout'
import Header from '../components/Header'
import WhatWeDo from '../components/WhatWeDo'
import FoundingMembers from '../components/FoundingMembers'
import WhoWeServe from '../components/WhoWeServe'
import CultureBlog from '../components/CultureBlog'
import Portfolio from '../components/Portfolio'
import MoreLinks from '../components/MoreLinks'
const Index = () => {
    return (
    <Layout>
        <Header/>
        <WhatWeDo/>
        <FoundingMembers />
        <WhoWeServe/>
        <CultureBlog/>
        <Portfolio/>
        <MoreLinks/>
    </Layout>
    )
}
export default Index