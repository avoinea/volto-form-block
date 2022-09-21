/**
 * HoneypotCaptchaWidget component.
 * @module components/manage/Widgets/HoneypotCaptchaWidget
 */

import React, { useState, useEffect } from 'react';

import TextWidget from '@plone/volto/components/manage/Widgets/TextWidget';
import { Grid } from 'semantic-ui-react';
import './HoneypotCaptchaWidget.css';

/**
 * HoneypotCaptchaWidget component class.
 * @function HoneypotCaptchaWidget
 * @returns {string} Markup of the component.
 */

/*By default, captcha token is setted, and becames empty if user/bot fills the field.
 */
const HoneypotCaptchaWidget = ({
  id,
  title,
  captchaToken,
  onChangeFormData,
}) => {
  const createToken = (id, value) => {
    const token = {
      id: id,
      value: value,
    };
    return JSON.stringify(token);
  };

  useEffect(() => {
    captchaToken.current = createToken(id, new Date().toString());
  }, [captchaToken, id]);

  useEffect(() => {
    onChangeFormData(id, id, '', { label: id });
  }, []);

  const [value, setValue] = useState();
  return (
    <Grid.Row className="honey-wrapper" key={'honeypot-captcha'}>
      <TextWidget
        id={id}
        name={id}
        label={title}
        title={title}
        onChange={(field, value) => {
          //captchaToken.current = createToken(id, value);
          captchaToken.current = undefined;
          setValue(value);
          onChangeFormData(id, field, value, {});
        }}
        value={value}
      />
    </Grid.Row>
  );
};

export default HoneypotCaptchaWidget;
