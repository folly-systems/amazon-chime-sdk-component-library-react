// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, ChangeEvent } from 'react';

import { FormField } from '../../../ui/FormField';
import { Select } from '../../../ui/Select';
import {
  useSelectVideoQuality,
  VideoQuality,
} from '../../../../hooks/sdk/useSelectVideoQuality';
import { VIDEO_INPUT_QUALITY } from '../../../../constants';

interface Props {
  /** Label shown for video quality selection, by default it is "Video quality" */
  label?: string;
  /** Label shown in the dropdown when no video quality has been selected yet, by default it is "Select video quality" */
  labelForUnselected?: string;
}

export const QualitySelection: React.FC<Props> = ({
  label = 'Video quality',
  labelForUnselected = 'Select video quality',
}) => {
  const selectVideoQuality = useSelectVideoQuality();
  const [videoQuality, setVideoQuality] = useState('unselected');
  const qualityOptions = [
    {
      label: labelForUnselected,
      value: 'unselected',
    },
    {
      label: VIDEO_INPUT_QUALITY['720p'],
      value: '720p',
    },
    {
      label: VIDEO_INPUT_QUALITY['540p'],
      value: '540p',
    },
    {
      label: VIDEO_INPUT_QUALITY['360p'],
      value: '360p',
    },
    {
      label: VIDEO_INPUT_QUALITY['270p'],
      value: '270p',
    },
    {
      label: VIDEO_INPUT_QUALITY['180p'],
      value: '180p',
    },
  ];

  async function selectQuality(e: ChangeEvent<HTMLSelectElement>) {
    const quality = e.target.value as VideoQuality;
    setVideoQuality(quality);
    selectVideoQuality(quality);
  }

  return (
    <FormField
      field={Select}
      options={qualityOptions}
      onChange={selectQuality}
      value={videoQuality}
      label={label}
    />
  );
};

export default QualitySelection;
