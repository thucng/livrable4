  <script id="template">
    <div class="flip-card" on-click="toggle('flipCard')">{{ flipCard ? 'Reset' : 'Animate' }}</div>
    <div class="contact-wrapper">
        <div class="envelope {{ flipCard ? 'active' : '' }}">
          <div class="back paper"></div>
          <div class="content">
            <div class="form-wrapper">
              <form>
                <div class="top-wrapper">
                  <div class="input">
                    <label>Name</label>
                    <input type="text" name="name"/>
                  </div>
                  <div class="input">
                    <label>Phone</label>
                    <input type="text" name="phone"/>
                  </div>
                  <div class="input">
                    <label>Email</label>
                    <input type="text" name="_replyto"/>
                  </div>
                </div>
                <div class="bottom-wrapper">
                  <div class="input">
                    <label>Subject</label>
                    <input type="text" name="_subject"/>
                  </div>
                  <div class="input">
                    <label>Message</label>
                    <textarea rows="5" name="message"></textarea>
                  </div>
                  <div class="submit">
                    <div class="submit-card" on-click="toggle('flipCard')">Send Mail</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="front paper"></div>
        </div>
      </div>
    
  </script>