import { FC } from 'react';
import styled from 'styled-components';

interface MissionProps {
    img: string;
    text: string;
}

const Mission: FC<MissionProps> = ({ img, text }) => {
    const MissionContainer = styled.div`
    box-shadow: 0 4px 15px 0 $shadow;
    width: 426px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    transition: transform 0.3s ease;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }
  `;

    const MissionImage = styled.img`
    position: absolute;
    top: -24px;
    width: 305px;
    height: 230px;
  `;

    const MissionText = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: $textPink;
    text-align: center;
    margin-top: 53%;
  `;

    return (
        <MissionContainer>
            <MissionImage src={img} alt="mission" />
            <MissionText>{text}</MissionText>
        </MissionContainer>
    );
};

export default Mission;
