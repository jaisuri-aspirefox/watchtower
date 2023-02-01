import { createUseStyles } from 'react-jss';
import { StepStyleProps } from './StepTypes';
import Color from 'color';

export const stepStyleDefaults = {
  activeBgColor: '#0f4c81',
  activeTextColor: '#0f4c81',
  completedBgColor: '#0f4c81',
  completedTextColor: '#0f4c81',
  inactiveBgColor: '#ffffff',
  inactiveTextColor: '#878787',
  size: '1em',
  circleFontSize: '16px',
  borderRadius: '0',
};

const HOVER_COLOR_DEFAULT_RATIO = 0.15;
const ACTIVE_COLOR_DEFAULT_RATIO = 0.2;

const shadeOrTintColor = (colorString: string, ratio: number) => {
  const color = Color(colorString);
  return color.isDark()
    ? color.darken(ratio).hex()
    : color.lighten(ratio).hex();
};

export const useStepStyles = createUseStyles({
  StepMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  StepButton: (props: StepStyleProps) => ({
    border: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    borderRadius: 0,
    backgroundColor: "#FFF",
    width: props.size,
    height: props.size,
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.active': {
      borderColor: props.activeBgColor,
      '&:hover': {
        borderColor: shadeOrTintColor(
          props.activeBgColor,
          HOVER_COLOR_DEFAULT_RATIO
        ),
      },
      '&:active': {
        borderColor: shadeOrTintColor(
          props.activeBgColor,
          ACTIVE_COLOR_DEFAULT_RATIO
        ),
      },
    },
    '&.completed': {
      borderColor: props.completedBgColor,
      '&:hover': {
        borderColor: shadeOrTintColor(
          props.completedBgColor,
          HOVER_COLOR_DEFAULT_RATIO
        ),
      },
      '&:active': {
        borderColor: shadeOrTintColor(
          props.completedBgColor,
          ACTIVE_COLOR_DEFAULT_RATIO
        ),
      },
    },
  }),
  StepButtonContent: (props: StepStyleProps) => ({
    color: props.inactiveTextColor,
    fontSize: props.circleFontSize,
    fontVariantNumeric: 'tabular-nums',
    '&.active': {
      color: props.activeTextColor,
    },
    '&.completed': {
      color: props.completedTextColor,
    },
  }),
});
