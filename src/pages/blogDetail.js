import React from 'react';
import PageContainer from "../containers/PageContainer"

const BlogDetails = () => {
    const blogTitle = 'Agribusiness'
    return (
        <PageContainer title={blogTitle}>
            <div className='blog-detail'>
                <h6 className='blog-tag'>Agribusiness</h6>
                <h4 className='blog-title'>Innovation in Agriculture Financing</h4>
                <p className='blog-meta'>May 15 2022 . 1 min Read</p>
                <img src={require('../assets/logo-flat-white.svg')} className='img-sig' alt="Agca"/>

                <img src={require('../assets/blog-img.svg')} className='blog-image' alt="blog"/>
                <div className='blog-text'>
                <p>To improve the lives of people and contribute to the nation's financial growth by providing innovative solutions, products and services including noninterest loans, thrift savings, seamless transactions, financial intelligence and job opportunities.</p>
                <h5>Agricultural FInancing </h5>
                <p>To improve the lives of underbanked people and contribute to the nation's financial growth by providing innovative solutions, products and services including noninterest loans, thrift savings, seamless transactions, financial intelligence and job opportunities.</p>
                <p>To improve the lives of underbanked people and contribute to the nation's financial growth by providing innovative solutions, products and services including noninterest loans, thrift savings, seamless transactions, financial intelligence and job opportunities.</p>
                </div>
            </div>
        </PageContainer>
    )
}

export default BlogDetails;