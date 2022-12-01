---
width: 50
height: 100
type: code
---

```svelte
<script>
  import { LabeledSwitch } from "bubbles-ui";
</script>

<LabeledSwitch
  label="Marketing Notifications"
  desc="We'll only send you notifications when something important happens."
  id="notifications.marketing"
  validation="boolean"
  value={true}
  onclick={(event) => {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;

    showLoading(id); //show the loading animation, perhaps for a network request

    //while loading the switch will be disabled

    setTimeout(() => {
      hideLoading(id); //stop the loading animation
    }, 2000);
  }}
/>
```
