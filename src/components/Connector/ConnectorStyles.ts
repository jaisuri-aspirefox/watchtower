import { createUseStyles } from 'react-jss';
import { ConnectorStyleProps } from './ConnectorTypes';

export const connectorStyleDefaults: ConnectorStyleProps = {
  disabledColor: '#878787',
  activeColor: '#878787',
  completedColor: '#878787',
  size: 140,
  style: 'dashed',
};

export const useConnectorStyles = createUseStyles({
  ConnectorContainer: (props: ConnectorStyleProps) => ({
    top: `calc((${props.stepSize} - ${props.size}) / 2)`,
    left: `calc(-50% + ${props.stepSize} - 8px)`,
    right: `calc(50% + ${props.stepSize} - 8px)`,
    position: 'absolute',
  }),
  Connector: (props: ConnectorStyleProps) => ({
    borderLeftStyle: props.style,
    borderLeftWidth: props.size,
    borderColor: props.disabledColor,
    display: 'block',
    height:props.size,
    '&.completed': {
      borderColor: props.completedColor,
    },
    '&.active': {
      borderColor: props.activeColor,
    },
  }),
});
