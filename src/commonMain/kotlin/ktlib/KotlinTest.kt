package ktlib

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

import kotlin.jvm.JvmStatic

@OptIn(ExperimentalJsExport::class)
@JsExport
fun outside(): String {
    return "I am outside"
}
@OptIn(ExperimentalJsExport::class)
@JsExport
class KotlinTest {
    companion object{
        @JvmStatic
        fun test(): String {
            return "Hello World"
        }
    }
}

