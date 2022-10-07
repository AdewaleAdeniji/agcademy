import React from 'react';
import BlogForm from '../components/blog/BlogForm';
import BlogHero from '../components/blog/BlogHero';
import BlogsList from '../components/blog/BlogsList';
import PageContainer from '../containers/PageContainer';

const Blogs = () => {
    window.scrollTo(0,0);
    return (
        <PageContainer title={'Blogs'}>
            <BlogHero />
            <BlogsList />
            <BlogForm />
        </PageContainer>
    );
}
export default Blogs;