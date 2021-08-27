import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class HealthCheckService implements OnApplicationBootstrap {
  private count = 0;

  onApplicationBootstrap(): any {
    this.checkDb();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    setInterval(function () {
      that.checkDb();
    }, 1000);
  }

  checkDb() {
    this.count++;
    if (this.count > 5) {
      throw new TypeError('Database error');
      process.exit();
    } else {
      console.log('Database is live for ' + this.count + ' seconds');
    }
  }
}
