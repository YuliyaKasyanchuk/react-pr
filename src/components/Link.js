import React, { Component } from 'react';
import styled from 'styled-components';

const Link =

class Link extends React.Component{
	render(){
		return(
			<StyledLink href={this.props.link}> {this.props.text} </StyledLink>
			)
	}
}

export  default Link