import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';

const SubFooter = props => {
  const data = useStaticQuery(graphql`
    query SubFooterQuery {
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer-inner">
              {/* <Social /> */}
              <p style={{color:'#fff', fontSize: '14px'}}>2150 Canalport Suite 2A-11 Chicago IL 60608.</p>
              <div className="copyright">
                <span>{data.configJson.footer.copyright_text}</span>
                {data.configJson.footer.copyright_link && (
                  <a href={data.configJson.footer.copyright_link}>{data.configJson.footer.copyright_link}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
