import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss';

export interface DynamicPageHeaderProps extends CommonProps {
  children?: ReactNode | ReactNodeArray;
}

interface InternalProps extends DynamicPageHeaderProps {
  headerPinned?: boolean;
  topHeaderHeight?: number;
}

const useStyles = createComponentStyles(DynamicPageHeaderStyles, { name: 'DynamicPageHeader' });

const DynamicPageHeader: FC<DynamicPageHeaderProps> = forwardRef((props: InternalProps, ref: Ref<HTMLDivElement>) => {
  const { children, headerPinned, topHeaderHeight, tooltip, className, style } = props;

  const passThroughProps = usePassThroughHtmlProps(props);

  const headerStyles = useMemo(() => {
    if (headerPinned) {
      return {
        ...style,
        top: `${topHeaderHeight}px`,
        zIndex: 1
      };
    }
    return style;
  }, [headerPinned, topHeaderHeight, style]);

  const classes = useStyles();
  const classNames = StyleClassHelper.of(classes.header).putIfPresent(className);

  return (
    <div
      title={tooltip}
      style={headerStyles}
      ref={ref}
      className={classNames.className}
      data-component-name="DynamicPageHeader"
      {...passThroughProps}
    >
      <FlexBox alignItems={FlexBoxAlignItems.Start}>{children}</FlexBox>
    </div>
  );
});

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };