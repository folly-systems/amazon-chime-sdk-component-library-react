import React from 'react';
import { Logger, LogLevel, VideoDownlinkBandwidthPolicy } from 'amazon-chime-sdk-js';
import MeetingManager from './MeetingManager';
import { PostLogConfig } from './types';
interface Props {
    /** Determines how verbose the logging statements will be */
    logLevel?: LogLevel;
    /** Configuration for a MeetingSessionPOSTLogger */
    postLogConfig?: PostLogConfig;
    /** Whether or not to enable simulcast for the meeting session */
    simulcastEnabled?: boolean;
    /** The `Logger` object you want to use in meeting session.
     * If you pass in a `Logger` object using this parameter,
     * the `MeetingManager` will use this object instead of creating a logger
     * based on `logLevel` and `postLogConfig` to initialize the meeting session.
     */
    logger?: Logger;
    /** The `VideoDownlinkBandwidthPolicy` object you want to use in meeting session */
    videoDownlinkBandwidthPolicy?: VideoDownlinkBandwidthPolicy;
    /** Pass a `MeetingManager` instance if you want to share this instance
     * across multiple different `MeetingProvider`s. This approach has limitations.
     * Check `meetingManager` prop documentation for more information.
     */
    meetingManager?: MeetingManager;
}
export declare const MeetingContext: React.Context<MeetingManager | null>;
export declare const MeetingProvider: React.FC<Props>;
export declare const useMeetingManager: () => MeetingManager;
export {};
