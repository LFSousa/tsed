---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation AllowTypes decorator
---
# AllowTypes <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { AllowTypes }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//common/jsonschema/decorators/allowTypes.ts#L0-L0">/common/jsonschema/decorators/allowTypes.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">AllowTypes</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> JSONSchema6TypeName<span class="token punctuation">,</span> ...types<span class="token punctuation">:</span> JSONSchema6TypeName<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  return <span class="token function">decoratorSchemaFactory</span><span class="token punctuation">(</span><span class="token punctuation">(</span>schema<span class="token punctuation">:</span> <a href="/api/common/jsonschema/class/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    schema.mapper.type<span class="token punctuation"> = </span><span class="token punctuation">[</span>type<span class="token punctuation">]</span>.<span class="token function">concat</span><span class="token punctuation">(</span>types<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>



<!-- Description -->
## Description

::: v-pre

Set the type of the array items.

## Example
### With multiple types

```typescript
class Model {
   @AllowTypes("string", "number", "boolean", "array")
   property: "string" | "number" | "boolean" | "array";
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": ["string", "number", "boolean", "array"]
    }
  }
}
```

### With array of multiple types

```typescript
class Model {
   @AllowTypes("string", "number", "boolean", "array")
   property: ("string" | "number" | "boolean" | "array")[];
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "array",
      "items": {
         "type": ["string", "number", "boolean", "array"]
      }
    }
  }
}
```


:::