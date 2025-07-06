import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { CallerLog } from "../generated/schema"
import { CallerLog as CallerLogEvent } from "../generated/Clocktower_Subscribe/Clocktower_Subscribe"
import { handleCallerLog } from "../src/clocktower-subscribe"
import { createCallerLogEvent } from "./clocktower-subscribe-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let timestamp = BigInt.fromI32(234)
    let checkedDay = BigInt.fromI32(234)
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let isFinished = "boolean Not implemented"
    let newCallerLogEvent = createCallerLogEvent(
      timestamp,
      checkedDay,
      caller,
      isFinished
    )
    handleCallerLog(newCallerLogEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("CallerLog created and stored", () => {
    assert.entityCount("CallerLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CallerLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "CallerLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "checkedDay",
      "234"
    )
    assert.fieldEquals(
      "CallerLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CallerLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isFinished",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
