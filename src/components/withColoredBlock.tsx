interface WithColorProps {
  color?: string;
}

const withColoredBlock = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & WithColorProps> => {
  const coloredBlock = ({color = "#FFFFFF", ...props}: WithColorProps) => {
    return (
      <div style={{backgroundColor: color}}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
  return coloredBlock;
};

export default withColoredBlock;
