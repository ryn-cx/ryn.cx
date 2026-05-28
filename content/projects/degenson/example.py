import datetime
from degenson import SchemaBuilder

builder = SchemaBuilder()
builder.add_object(datetime.date(2018, 11, 13))
schema = builder.to_schema()
print(schema)

# ───────────────────────── Printed output ─────────────────────────
{'$schema': 'http://json-schema.org/schema#', 'type': 'string', 'format': 'date'}
