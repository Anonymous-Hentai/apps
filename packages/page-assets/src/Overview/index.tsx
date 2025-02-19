// Copyright 2017-2021 @polkadot/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AssetId } from '@polkadot/types/interfaces';
import type { AssetInfo } from '../types';

import React from 'react';

import { Button } from '@polkadot/react-components';

import Assets from './Assets';
import Create from './Create';
import Summary from './Summary';

interface Props {
  className?: string;
  ids?: AssetId[];
  infos?: AssetInfo[];
}

function Overview ({ className, ids, infos }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      <Summary numAssets={ids?.length} />
      <Button.Group>
        <Create assetIds={ids} />
      </Button.Group>
      <Assets infos={infos} />
    </div>
  );
}

export default React.memo(Overview);
