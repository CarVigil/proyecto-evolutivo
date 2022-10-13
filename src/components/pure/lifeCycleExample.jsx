/* Ejemplo de componente de tipo clase que dispone de los metodos del ciclo de vida */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: justo al montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* return true o false controla si debe o no actualizarse*/
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('WillUpdate: justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: justo antes de desaparecer')


    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;