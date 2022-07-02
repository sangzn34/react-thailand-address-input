import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withState } from 'recompose';
import AddressForm from '../src/index';

import '../src/styles.css';
import TestProps from './TestProps';

storiesOf('Component', module)
  .add('montage', () => (
    <div style={{ width: 350 }}>
      <AddressForm onAddressSelected={action('onSelectedAdress')} />
      <code>{'<AddressForm onAddressSelected={action(\'onSelectedAdress\')} />'}</code>
    </div>
  ))
  .add('handle result', () => {
    const WithStateComponent = withState('result', 'setResult', null)(({ result, setResult }) => (
      <div style={{ width: 350 }}>
        <div>
          selected : {result ? `${result.p} ${result.a} ${result.d} ${result.z}` : null}
        </div>
        <AddressForm onAddressSelected={address => setResult(address)} />
      </div>
    ));
    return (<div>
      <WithStateComponent />
      <code>
        {`
         <div style={{ width: 350 }}>
          <div>
            selected : {result ? \`\${result.p} \${result.a} \${result.d} \${result.z}\` : null}
          </div>
          <AddressForm onAddressSelected={address => setResult(address)} />
        </div>
        `}
      </code>
    </div>);
  })
  .add('custom render result', () => (
    <TestProps />
  ))
  .add('custom initial', () => (
    <div style={{ width: 350 }}>
      <AddressForm
        onAddressSelected={action('onSelectedAdress')}
        values={{
          d: "ฟากท่า", a: "ฟากท่า", p: "อุตรดิตถ์", z: 53161
        }}
      />
      <code>{'<AddressForm onAddressSelected={action(\'onSelectedAdress\')} />'}</code>
    </div>
  ))
  .add('show label', () => (
    <div style={{ width: 350 }}>
      <AddressForm
        showLabel
        onAddressSelected={action('onSelectedAdress')}
        values={{
          d: "ฟากท่า", a: "ฟากท่า", p: "อุตรดิตถ์", z: 53161
        }}
      />
      <code>{'<AddressForm onAddressSelected={action(\'onSelectedAdress\')} />'}</code>
    </div>
  ))
  .add('maxVisible', () => (
    <div style={{ width: 350 }}>
      <AddressForm
        showLabel
        maxVisible={40}
        onAddressSelected={action('onSelectedAdress')}
        values={{
          d: "ฟากท่า", a: "ฟากท่า", p: "อุตรดิตถ์", z: 53160
        }}
      />
      <code>{'<AddressForm onAddressSelected={action(\'onSelectedAdress\')} />'}</code>
    </div>
  ));

