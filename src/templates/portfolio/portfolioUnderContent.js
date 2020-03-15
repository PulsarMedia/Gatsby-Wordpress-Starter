import React from "react";
import Layout from "../../components/layout";
import { PortfolioItems } from "../../components/portfolio";
import SEO from "../../components/seo";

export default ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} />
    <div className="container body">
      <div className="row">
        <div className="col-lg-12">
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
          <PortfolioItems />
        </div>
      </div>
    </div>
  </Layout>
);
