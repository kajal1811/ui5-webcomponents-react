import React, { FC, forwardRef, RefObject } from 'react';

// @ts-ignore
import { NotificationProptypes } from '@ui5/webcomponents-react/components/Notification';
import { Notification } from '@ui5/webcomponents-react/lib/Notification';

const NotificationGroup: FC<NotificationProptypes> = forwardRef(
  (props: NotificationProptypes, ref: RefObject<HTMLDivElement>) => {
    return <Notification {...props} ref={ref} />;
  }
);

NotificationGroup.defaultProps = {
  visible: true,
  autoPriority: true,
  truncate: true,
  showCloseButton: true
};

NotificationGroup.displayName = 'Notification Group';

export { NotificationGroup };