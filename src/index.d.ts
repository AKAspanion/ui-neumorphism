declare module 'ui-neumorphism' {
  export import Alert = __UINeumorphism.Alert
}

declare namespace __UINeumorphism {
  export interface AlertProps {
    color?: string
    dense?: boolean
    closable?: boolean
    icon?: React.ReactNode
    closeIcon?: React.ReactNode
  }
  export class Alert extends React.Component<AlertProps> {}
}
