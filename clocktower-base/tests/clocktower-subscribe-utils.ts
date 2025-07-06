import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Clocktower_Subscribe/Clocktower_Subscribe"

export function createCallerLogEvent(
  timestamp: BigInt,
  checkedDay: BigInt,
  caller: Address,
  isFinished: boolean
): CallerLog {
  let callerLogEvent = changetype<CallerLog>(newMockEvent())

  callerLogEvent.parameters = new Array()

  callerLogEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  callerLogEvent.parameters.push(
    new ethereum.EventParam(
      "checkedDay",
      ethereum.Value.fromUnsignedBigInt(checkedDay)
    )
  )
  callerLogEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  callerLogEvent.parameters.push(
    new ethereum.EventParam(
      "isFinished",
      ethereum.Value.fromBoolean(isFinished)
    )
  )

  return callerLogEvent
}

export function createCoordinatesEvent(
  id: Bytes,
  subscriberIndex: BigInt,
  subscriptionIndex: BigInt,
  frequency: BigInt,
  nextUncheckedDay: BigInt
): Coordinates {
  let coordinatesEvent = changetype<Coordinates>(newMockEvent())

  coordinatesEvent.parameters = new Array()

  coordinatesEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  coordinatesEvent.parameters.push(
    new ethereum.EventParam(
      "subscriberIndex",
      ethereum.Value.fromUnsignedBigInt(subscriberIndex)
    )
  )
  coordinatesEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionIndex",
      ethereum.Value.fromUnsignedBigInt(subscriptionIndex)
    )
  )
  coordinatesEvent.parameters.push(
    new ethereum.EventParam(
      "frequency",
      ethereum.Value.fromUnsignedBigInt(frequency)
    )
  )
  coordinatesEvent.parameters.push(
    new ethereum.EventParam(
      "nextUncheckedDay",
      ethereum.Value.fromUnsignedBigInt(nextUncheckedDay)
    )
  )

  return coordinatesEvent
}

export function createDefaultAdminDelayChangeCanceledEvent(): DefaultAdminDelayChangeCanceled {
  let defaultAdminDelayChangeCanceledEvent =
    changetype<DefaultAdminDelayChangeCanceled>(newMockEvent())

  defaultAdminDelayChangeCanceledEvent.parameters = new Array()

  return defaultAdminDelayChangeCanceledEvent
}

export function createDefaultAdminDelayChangeScheduledEvent(
  newDelay: BigInt,
  effectSchedule: BigInt
): DefaultAdminDelayChangeScheduled {
  let defaultAdminDelayChangeScheduledEvent =
    changetype<DefaultAdminDelayChangeScheduled>(newMockEvent())

  defaultAdminDelayChangeScheduledEvent.parameters = new Array()

  defaultAdminDelayChangeScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "newDelay",
      ethereum.Value.fromUnsignedBigInt(newDelay)
    )
  )
  defaultAdminDelayChangeScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "effectSchedule",
      ethereum.Value.fromUnsignedBigInt(effectSchedule)
    )
  )

  return defaultAdminDelayChangeScheduledEvent
}

export function createDefaultAdminTransferCanceledEvent(): DefaultAdminTransferCanceled {
  let defaultAdminTransferCanceledEvent =
    changetype<DefaultAdminTransferCanceled>(newMockEvent())

  defaultAdminTransferCanceledEvent.parameters = new Array()

  return defaultAdminTransferCanceledEvent
}

export function createDefaultAdminTransferScheduledEvent(
  newAdmin: Address,
  acceptSchedule: BigInt
): DefaultAdminTransferScheduled {
  let defaultAdminTransferScheduledEvent =
    changetype<DefaultAdminTransferScheduled>(newMockEvent())

  defaultAdminTransferScheduledEvent.parameters = new Array()

  defaultAdminTransferScheduledEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )
  defaultAdminTransferScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "acceptSchedule",
      ethereum.Value.fromUnsignedBigInt(acceptSchedule)
    )
  )

  return defaultAdminTransferScheduledEvent
}

export function createDetailsLogEvent(
  id: Bytes,
  provider: Address,
  timestamp: BigInt,
  url: string,
  description: string
): DetailsLog {
  let detailsLogEvent = changetype<DetailsLog>(newMockEvent())

  detailsLogEvent.parameters = new Array()

  detailsLogEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  detailsLogEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  detailsLogEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  detailsLogEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )
  detailsLogEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return detailsLogEvent
}

export function createProvDetailsLogEvent(
  provider: Address,
  timestamp: BigInt,
  description: string,
  company: string,
  url: string,
  domain: string,
  email: string,
  misc: string
): ProvDetailsLog {
  let provDetailsLogEvent = changetype<ProvDetailsLog>(newMockEvent())

  provDetailsLogEvent.parameters = new Array()

  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromString(company))
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("domain", ethereum.Value.fromString(domain))
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  provDetailsLogEvent.parameters.push(
    new ethereum.EventParam("misc", ethereum.Value.fromString(misc))
  )

  return provDetailsLogEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSubLogEvent(
  id: Bytes,
  provider: Address,
  subscriber: Address,
  timestamp: BigInt,
  amount: BigInt,
  token: Address,
  subScriptEvent: i32
): SubLog {
  let subLogEvent = changetype<SubLog>(newMockEvent())

  subLogEvent.parameters = new Array()

  subLogEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  subLogEvent.parameters.push(
    new ethereum.EventParam(
      "subScriptEvent",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(subScriptEvent))
    )
  )

  return subLogEvent
}

export function createUListEvent(
  timestamp: BigInt,
  id: Bytes,
  subscriber: Address
): UList {
  let uListEvent = changetype<UList>(newMockEvent())

  uListEvent.parameters = new Array()

  uListEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  uListEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  uListEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return uListEvent
}
