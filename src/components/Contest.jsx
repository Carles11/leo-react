import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Contest = (props) => {
  const { DIC, PARAGRAPHS } = props;

  return (
    <article className="app-section app-section-boxes app-section-0 h725">
      {PARAGRAPHS.map((p) => {
        const link = p.url ? (
          <Button link={p.url} label={`${DIC.MORE_INFO}`} external={false} />
        ) : (
          ''
        );

        return (
          <div key={p.title} className="app-section-box">
            <h2 className="tit-box">{DIC[p.title]}</h2>
            <p className="txt txt-IE">
              {DIC[`${p.title}_TXT`]}
              {p.title === 'CONCURSO_EDICION' && (
                <strong className="txt-highlight">
                  {DIC.CONCURSO_EDICION_FINAL_NEXT_DATE}. {''}
                </strong>
              )}

              {DIC[`${p.title}_TXT_CONT`]}
              {p.title === 'CONCURSO_EDICION' && (
                <strong className="txt-highlight">
                  {DIC.CONCURSO_EDICION_FINAL_INSCRIPTION_DUE}.
                </strong>
              )}
            </p>
            {link}
          </div>
        );
      })}
    </article>
  );
};

Contest.propTypes = {
  DIC: PropTypes.object.isRequired,
};

export default Contest;
