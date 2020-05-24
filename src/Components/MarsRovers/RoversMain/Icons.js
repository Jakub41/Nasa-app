import Styled from '@emotion/styled';
import { CheckCircle, XCircle } from 'styled-icons/boxicons-solid';
import { Photo } from 'styled-icons/foundation';
import { Mars } from 'styled-icons/fa-solid';

// Custom icons
import LaunchRocket from '../../../Assets/Icons/launchRocket.png';
import LandRocket from '../../../Assets/Icons/landing.png';
import Calendar from '../../../Assets/Icons/calendar.png';

const StatusActive = Styled(CheckCircle)`
  color: green;
  width: 40px;
  height: 40px;
`;

const StatusNotActive = Styled(XCircle)`
  color: red;
  width: 40px;
  height: 40px;
`;

const PhotoIcon = Styled(Photo)`
  color: black;
  width: 40px;
  height: 40px;
`;

const MarsSymbol = Styled(Mars)`
  color: #D06D6D;
  width: 40px;
  height: 40px;
`;

const Icons = {
  LaunchRocket,
  LandRocket,
  Calendar,
  StatusActive,
  StatusNotActive,
  PhotoIcon,
  MarsSymbol,
};

export default Icons;
