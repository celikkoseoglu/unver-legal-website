import React, { useState } from "react";
import NoSSR from "react-no-ssr";
import BlogItem from "../components/Blog/BlogItem";
import {
  blogItemMargin,
  blogNavbarMargin,
  blogStyle,
  footerStyle,
} from "../stylesheets/Blog.module.sass";
import { getInitialTheme } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import BlogNavbar from "../components/Navbar/BlogNavbar";
import { firebaseAnalytics } from "../firebaseConfig";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/blog.png";

import GrowingCircleAnimation from "../components/Animations/GrowingCircleAnimation";

const blog = require("../data/blog");
const footer = require("../data/footer");
const blogNavbar = require("../data/blogNavbar");

const Blog = () => {
  const [isDark, setIsDark] = useState(getInitialTheme());

  firebaseAnalytics.logEvent("blog_visited");

  const noSSRContent = blog.blogItems.map((blogItem) => (
    <BlogItem
      className={blogItemMargin}
      title={blogItem.title}
      date={blogItem.date}
      minutes={blogItem.minutes}
      subtitle={blogItem.subtitle}
      blogPost={blogItem.blogPost}
      isDark={isDark}
      key={blogItem.title}
    />
  ));

  const content = (
    <div>
      <MetaDecorator
        description={blog.pageDescription}
        title={blog.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={blog.metaImageAlt}
      />
      <GrowingCircleAnimation isDark={isDark} />
      <div className={`${blogStyle}`}>
        <BlogNavbar
          headerText={blogNavbar.blogBranding}
          brandingLink={blogNavbar.homeLink}
          className={blogNavbarMargin}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {blog.blogItems.map((blogItem) => (
          <BlogItem
            className={blogItemMargin}
            title={blogItem.title}
            date={blogItem.date}
            minutes={blogItem.minutes}
            subtitle={blogItem.subtitle}
            blogPost={blogItem.blogPost}
            isDark={isDark}
            key={blogItem.title}
          />
        ))}

        <HorizontalRuler isDark={isDark} />
      </div>
      <div className={footerStyle}>
        <BlogFooter content={footer} isDark={isDark} />
      </div>
    </div>
  );

  return <NoSSR onSSR={noSSRContent}>{content}</NoSSR>;
};

export default Blog;
