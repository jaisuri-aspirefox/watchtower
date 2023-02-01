import { createUseStyles } from 'react-jss';

export const useStepperStyles = createUseStyles({
  StepperContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 24,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  StepContainer: {
    flex: 1,
    position: 'relative',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: '40px'
  },
  StepperLogo: {
    backgroundImage: `URL('../../images/watchtowerLogo.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '69px',
    width: '250px',
    marginTop: '27px'
  }
});
