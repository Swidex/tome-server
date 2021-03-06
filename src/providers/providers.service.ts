import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Provider } from './interfaces/provider.interface';
import { ProviderDto } from './dto/provider.dto';

@Injectable()
export class ProvidersService {
  constructor(@InjectModel('Provider') private readonly providerModel: Model<Provider>) {}

  // CREATE provider
  async addProvider(createProviderDTO: ProviderDto): Promise<Provider> {
    const newProvider = await new this.providerModel(createProviderDTO);
    return newProvider.save();
  }

  // READ provider
  async getProvider(providerID): Promise<Provider> {
    const customer = await this.providerModel.findById(providerID).exec();
    return customer;
  }

  // UPDATE provider details
  async updateProvider(providerID, data): Promise<Provider> {
    const updatedProvider = await this.providerModel.findByIdAndUpdate(providerID, data, {
      new: true,
    });
    return updatedProvider;
  }

  // DELETE provider
  async deleteProvider(providerID): Promise<any> {
    const deletedProvider = await this.providerModel.findByIdAndRemove(providerID);
    return deletedProvider;
  }

  // GET ALL providers
  async getAllProvider(): Promise<Provider[]> {
    const customers = await this.providerModel.find().exec();
    return customers;
  }

}
