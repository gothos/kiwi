import React from 'react'
import {Alert, Spin, Modal} from 'antd'
import propTypes from 'prop-types'
import {v4 as uuid} from 'uuid'
import {connect} from 'react-redux'
import {convertInput, resetConvertion} from '../../modules/actions/convertion'
import {clearInput, updateInput} from '../../modules/actions/input'
import {Button as BoostrapButton, Grid, Col, Row} from 'react-bootstrap'
import {PHONE_BUTTONS} from '../../const/phoneButtons'
import Button from './Button'
import {Textbox} from 'react-inputs-validation'

const KeyboardView = props => {
  const {
    clearInput,
    convertInput,
    convertion,
    input,
    updateInput,
    resetConvertion,
    loading,
    serverError,
  } = props

  const handleClearInput = () => {
    clearInput()
    resetConvertion()
  }

  const handleConvertInput = () => {
    convertInput(input)
  }

  const renderPhoneButtons = () => {
    return PHONE_BUTTONS.map(button => (
      <Button
        disabled={button.disabled}
        key={uuid()}
        subtitle={button.subtitle}
        title={button.title}
        updateInput={updateInput}
        value={button.value}
      />
    ))
  }

  return (
    <Grid className="container container--app">
      <Row className="show-grid">
        <Col lg={12}>
          <Textbox
            className="input"
            placeholder="Use dial to enter a number"
            type="text"
            value={input}
          />
        </Col>
      </Row>
      <Row
        className="show-grid"
        style={{marginTop: '30px', marginBottom: '30px'}}
      >
        <Col lg={6} sm={6} xs={6} md={6}>
          <BoostrapButton
            bsStyle="primary"
            bsSize="large"
            disabled={!input}
            onClick={handleClearInput}
          >
            Clear
          </BoostrapButton>
        </Col>
        <Col lg={6} sm={6} xs={6} md={6}>
          <BoostrapButton
            style={{float: 'right'}}
            bsStyle="primary"
            bsSize="large"
            disabled={!input}
            onClick={handleConvertInput}
          >
            Convert
          </BoostrapButton>
        </Col>
      </Row>
      <div className="container container--dial">{renderPhoneButtons()}</div>

      {loading ? (
        <Spin />
      ) : (
        <div className="output">{convertion.join(' , ')}</div>
      )}
      {serverError && (
        <Alert
          message="Error"
          description="Server connection error."
          type="error"
          banner={true}
          showIcon
        />
      )}
    </Grid>
  )
}

KeyboardView.propTypes = {
  clearInput: propTypes.func.isRequired,
  convertInput: propTypes.func.isRequired,
  convertion: propTypes.array.isRequired,
  input: propTypes.string.isRequired,
  updateInput: propTypes.func.isRequired,
  resetConvertion: propTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    input: state.input,
    convertion: state.convertion.words,
    loading: state.convertion.loading,
    serverError: state.convertion.serverError,
  }
}

export default connect(mapStateToProps, {
  clearInput,
  convertInput,
  updateInput,
  resetConvertion,
})(KeyboardView)
