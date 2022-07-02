// @flow
import React from 'react';
import { fieldsEnum } from './finder';
import AddressTypeahead from './AddressTypeahead.component';

type AddressFormInputPropType = {
  values: {
    a: string;
    d: string;
    p: string;
    z: string;
  };
  showLabel: { type: boolean, default: true };
  classNameInput: string;
  maxVisible: { type: number };
  placeholder: {
    a: string;
    d: string;
    p: string;
    z: string;
  };
  onAddressSelected: (addresObject) => void;
  renderResult: (data) => React.Component;
}
class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressObj: props.values,
    };
    this.setAddressObj = this.setAddressObj.bind(this);
  }

  setAddressObj(addressObj) {
    this.setState({ addressObj });
  }
  props: AddressFormInputPropType;
  render() {
    const { addressObj } = this.state;
    return (<div>
      {
        Object.keys(fieldsEnum).map((key) => {
          let name;
          switch (fieldsEnum[key]) {
            case 'd': name = 'ตำบล'; break;
            case 'a': name = 'อำเภอ'; break;
            case 'p': name = 'จังหวัด'; break;
            case 'z': name = 'รหัสไปรษณีย์'; break;
            default: name = ''; break;
          }
          return (
            <div key={key} className="typeahead-address-container">
              {this.props.showLabel ?
                <label className="typeahead-address-label" htmlFor="district">{name}</label>
                : <label></label>
              }
              <AddressTypeahead
                className={this.props.classNameInput}
                placeholder={this.props.placeholder ? this.props.placeholder[fieldsEnum[key]] || '' : ''}
                renderResult={this.props.renderResult}
                maxVisible={this.props.maxVisible}
                onOptionSelected={(result) => {
                  this.setAddressObj(result);
                  this.props.onAddressSelected(result);
                }}
                value={addressObj ? addressObj[fieldsEnum[key]] : ''}
                fieldType={fieldsEnum[key]}
              />
            </div>
          );
        })
      }
    </div>);
  }
}

AddressForm.defaultProps = {
  maxVisible: 20,
};

export default AddressForm;
