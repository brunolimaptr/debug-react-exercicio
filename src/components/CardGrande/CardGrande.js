import React from 'react';
import {LayoutCardGrande} from './styles';
import {ImgCardGrande} from './styles';
import {InfosCard} from './styles';
import {TituloCardGrande} from './styles';



export function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCard>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCard>
        </LayoutCardGrande>
    )
}