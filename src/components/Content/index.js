import React from 'react';

const Content = ({pageId, pageTitle, children, link}) => (
  <section id={pageId}>
    <a id={`${link}Link`}>&nbsp;</a>
    <h2>{pageTitle}</h2>
    {children}
  </section>
);

export default Content;