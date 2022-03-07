/* eslint-disable */
import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import SuiteInfo = jasmine.SuiteInfo

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, status: string): string {
    return `${status}`
  }
}

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
    suite: {
      displayNumber: true
    },
    spec: {
      displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
  })
)
