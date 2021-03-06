"use strict";
import React from 'react'

export default React.createClass({
  render: function () {
    return (
      <div className="icons-wrapper icon-legend app-legend">
        <div className="icons">
          <div className="icon">
            <div className="icon-wrapper icon-diagnostic-embossed"/>
            <div className="icons-description-wrapper">
              <p className="title">Quill Diagnostic</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-wrapper icon-lessons-embossed"/>
            <div className="icons-description-wrapper">
              <p className="title">Quill Lessons</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-wrapper icon-connect-embossed"/>
            <div className="icons-description-wrapper">
              <p className="title">Quill Connect</p>
            </div>
          </div>
            <div className="icon">
              <div className="icon-wrapper icon-flag-embossed"/>
              <div className="icons-description-wrapper">
                <p className="title">Quill Proofreader</p>
              </div>
            </div>
            <div className="icon">
              <div className="icon-wrapper icon-puzzle-embossed"/>
              <div className="icons-description-wrapper">
                <p className="title">Quill Grammar</p>
              </div>
            </div>
          </div>
    </div>
    );
  }
});
