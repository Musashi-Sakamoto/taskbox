import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Dialog from './Dialog'

export const actions = {
    handleClose: action('handleClose'),
}

storiesOf('Dialog', module)
    .add('close', () => <Dialog open={false} {...actions} />)
    .add('open', () => <Dialog open {...actions} />)