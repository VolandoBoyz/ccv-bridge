## Community Core Vision Bridge (CCV-Bridge) 🌉

<div style="text-align:center" markdown="1">
![Bridge](https://cloud.githubusercontent.com/assets/8507571/25975297/bf8def1e-36ad-11e7-8d43-eff2cd21d058.gif)
</div>

This program acts as a bridge between Community Core Vision (CCV) and your Client via **socket.io**

#### How it works?

1. Connects to OSC server where CCV is emitting
2. Translates OSC information into a more usable JSON format
3. Sends the stream of data to your client via socket.io

#### How to use it?
1. Open CCV and leave it Open (it will start emitting data immediately)
2. Run `npm run start` on CCV-Bridge's folder
3. Now you can connect as many clients as you need to it and read the stream of data

>You can leave CCV and CCV-Bridge side by side to see the stream of data in relationship to the video

#### Notes

- You can run `npm run start:osc` to see the stream of data in OSC raw format
- You can run `npm dev` to run the app in watch mode when developing over it (it will restart itself with every change).
