import {
  CallerLog as CallerLogEvent,
  Coordinates as CoordinatesEvent,
  DefaultAdminDelayChangeCanceled as DefaultAdminDelayChangeCanceledEvent,
  DefaultAdminDelayChangeScheduled as DefaultAdminDelayChangeScheduledEvent,
  DefaultAdminTransferCanceled as DefaultAdminTransferCanceledEvent,
  DefaultAdminTransferScheduled as DefaultAdminTransferScheduledEvent,
  DetailsLog as DetailsLogEvent,
  ProvDetailsLog as ProvDetailsLogEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SubLog as SubLogEvent,
  UList as UListEvent
} from "../generated/Clocktower_Subscribe/Clocktower_Subscribe"
import {
  CallerLog,
  Coordinates,
  DefaultAdminDelayChangeCanceled,
  DefaultAdminDelayChangeScheduled,
  DefaultAdminTransferCanceled,
  DefaultAdminTransferScheduled,
  DetailsLog,
  ProvDetailsLog,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SubLog,
  UList
} from "../generated/schema"

export function handleCallerLog(event: CallerLogEvent): void {
  let entity = new CallerLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp
  entity.checkedDay = event.params.checkedDay
  entity.caller = event.params.caller
  entity.isFinished = event.params.isFinished

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCoordinates(event: CoordinatesEvent): void {
  let entity = new Coordinates(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.internal_id = event.params.id
  entity.subscriberIndex = event.params.subscriberIndex
  entity.subscriptionIndex = event.params.subscriptionIndex
  entity.frequency = event.params.frequency
  entity.nextUncheckedDay = event.params.nextUncheckedDay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminDelayChangeCanceled(
  event: DefaultAdminDelayChangeCanceledEvent
): void {
  let entity = new DefaultAdminDelayChangeCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminDelayChangeScheduled(
  event: DefaultAdminDelayChangeScheduledEvent
): void {
  let entity = new DefaultAdminDelayChangeScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newDelay = event.params.newDelay
  entity.effectSchedule = event.params.effectSchedule

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminTransferCanceled(
  event: DefaultAdminTransferCanceledEvent
): void {
  let entity = new DefaultAdminTransferCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminTransferScheduled(
  event: DefaultAdminTransferScheduledEvent
): void {
  let entity = new DefaultAdminTransferScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAdmin = event.params.newAdmin
  entity.acceptSchedule = event.params.acceptSchedule

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDetailsLog(event: DetailsLogEvent): void {
  let entity = new DetailsLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.internal_id = event.params.id
  entity.provider = event.params.provider
  entity.timestamp = event.params.timestamp
  entity.url = event.params.url
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvDetailsLog(event: ProvDetailsLogEvent): void {
  let entity = new ProvDetailsLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.timestamp = event.params.timestamp
  entity.description = event.params.description
  entity.company = event.params.company
  entity.url = event.params.url
  entity.domain = event.params.domain
  entity.email = event.params.email
  entity.misc = event.params.misc

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubLog(event: SubLogEvent): void {
  let entity = new SubLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.internal_id = event.params.id
  entity.provider = event.params.provider
  entity.subscriber = event.params.subscriber
  entity.timestamp = event.params.timestamp
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.subScriptEvent = event.params.subScriptEvent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUList(event: UListEvent): void {
  let entity = new UList(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp
  entity.internal_id = event.params.id
  entity.subscriber = event.params.subscriber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
