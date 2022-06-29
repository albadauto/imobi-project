import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { ErrorTitle } from './style'

export default function Error() {
    return (
        <Container className="text-center">
            <ErrorTitle>
                Opssssss Parece que a página não foi encontrada :/
                <Image src="https://media.gettyimages.com/videos/medium-shot-zoom-in-baboon-pounding-on-computer-keyboard-video-id712-20?s=640x640" />
              <h1>Verifique a URL e tente novamente :D</h1>
            </ErrorTitle>

            <br /><br /><br /><br /><br /><br />
            
        </Container>

    )
}
